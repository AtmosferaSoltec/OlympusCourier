import * as fs from 'fs';
import * as path from 'path';

const httpsCertificate = () => {
  const isProduction = process.env.IN_PRODUCTION === 'true';
  if (!isProduction) {
    return null;
  }

  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../secrets/private-key.pem')),
    cert: fs.readFileSync(
      path.join(__dirname, '../secrets/public-certificate.pem'),
    ),
  };
  return httpsOptions;
};

export { httpsCertificate };
