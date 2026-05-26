/**
 * Paste this into your Google Apps Script project bound to the sheet,
 * then Deploy > New deployment > Web app:
 * - Execute as: Me
 * - Who has access: Anyone
 */
function doPost(e) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Consultations") ||
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  const payload = JSON.parse(e.postData.contents);

  sheet.appendRow([
    payload.timestamp || new Date(),
    payload.formType || "Book a Free Consultation",
    payload.name || "",
    payload.contact || "",
    payload.email || "",
    payload.service || "",
    payload.message || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
