// app/api/download/route.js

import { NextResponse } from 'next/server'; // Import NextResponse
import path from 'path';
import fs from 'fs';

export async function GET() {
  const filePath = path.resolve('./public/Error307!.pdf');

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`File not found at: ${filePath}`);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });  // Use NextResponse for JSON response
  }

  const fileStream = fs.createReadStream(filePath);

  const response = new NextResponse(fileStream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=Error307!.pdf',
    },
  });

  return response;  // Return the response object with the stream
}
