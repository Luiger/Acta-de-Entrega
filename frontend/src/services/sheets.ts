import { google } from 'googleapis';
import { googleCredentials, spreadsheetId } from '../store/constant';

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(googleCredentials),
  scopes,
});

const sheets = google.sheets({ version: 'v4', auth });

export const getSheetData = async (sheetName: string) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: sheetName,
    });
    return response.data.values;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return null;
  }
};

export const appendSheetData = async (sheetName: string, rowData: any[]) => {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: sheetName,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Error appending sheet data:', error);
    return false;
  }
};
