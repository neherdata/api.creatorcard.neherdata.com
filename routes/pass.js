// import { createPass } from "passkit-generator";

try {
  const examplePass = await createPass({
    model: ".model/Imported.pkpass",
    certificates: {
      wwdr: "./certs/wwdr.pem",
      signerCert: "./certs/signercert.pem",
      signerKey: {
        keyFile: "./certs/passcomneherdatacreatorcardapi.key",
      },
    },
  });

  // Generate the stream, which gets returned through a Promise
  const stream: Stream = examplePass.generate();

  doSomethingWithTheStream(stream);
} catch (err) {
  doSomethingWithTheError(err);
}
