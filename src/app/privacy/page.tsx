/* eslint-disable react/no-unescaped-entities */
import { Card } from "src/components/shared/card";
import { Typography } from "src/components/theme/material-tailwind-for-server";

export default function Privacy() {
  return (
    <div className="max-w-[80%] mx-auto py-8 h-full max-h-full">
      <Card className="max-h-full h-full">
        <div className="overflow-y-auto max-h-full pr-2">
          <Typography variant="h5">1. Introduction</Typography>
          <Typography className="pl-4 font-normal">
            Welcome to our Discord bot service. We value your privacy and strive
            to protect your personal information. This Privacy Policy outlines
            the types of information we collect, how we use it, and the measures
            we take to protect your data.
          </Typography>
          <br />

          <Typography variant="h5">2. Information We Collect</Typography>
          <Typography variant="h6" className="pl-3 pb-2">
            2.1 User Information
          </Typography>
          <Typography className="pl-4 font-normal">
            When you interact with our Bot, we collect the following
            information:{" "}
          </Typography>
          <ul className="pl-6 pb-2">
            <li className="font-normal">
              • Avatar: Your Discord avatar image.
            </li>
            <li className="font-normal">• Username: Your Discord username.</li>
            <li className="font-normal">
              • Display Name: The name you have chosen to display on Discord.
            </li>
            <li className="font-normal">
              • User ID: Your unique Discord user ID.
            </li>
          </ul>

          <Typography variant="h6" className="pl-3 pb-2">
            2.2 Commands and Voice Channel Access
          </Typography>
          <ul className="pl-6">
            <li className="font-normal">
              • Commands: We read commands inputted by users in the chat to
              execute Bot functions.
            </li>
            <li className="font-normal">
              • Voice Channel Access: Our Bot has access to voice channels
              solely to play music. The Bot is configured to be deaf and does
              not listen to or record voice communications.
            </li>
          </ul>
          <br />

          <Typography variant="h5">3. How We Use Your Information</Typography>
          <Typography variant="h6" className="pl-3 pb-2">
            3.1 Providing Bot Services
          </Typography>
          <Typography className="pl-4 font-normal">
            We use the information collected to:
          </Typography>
          <ul className="pl-6 pb-2">
            <li className="font-normal">• Identify and authenticate users.</li>
            <li className="font-normal">
              • Facilitate music playback in voice channels.
            </li>
            <li className="font-normal">
              • Execute commands as requested by users.
            </li>
          </ul>
          <Typography variant="h6" className="pl-3 pb-2">
            3.2 No Data Retention Without User Sign-In
          </Typography>
          <Typography className="pl-4 font-normal">
            We do not save or retain any personal information mentioned above
            unless you sign in to our associated application. Once signed in,
            your information is stored securely to enhance your experience and
            provide additional features.
          </Typography>
          <br />

          <Typography variant="h5">4. Data Security</Typography>
          <Typography className="pl-4 font-normal">
            We implement industry-standard security measures to protect your
            data from unauthorized access, disclosure, alteration, or
            destruction. Our security practices include:{" "}
          </Typography>
          <ul className="pl-6">
            <li className="font-normal">
              • Secure storage of personal information.
            </li>
            <li className="font-normal">
              {" "}
              • Encryption of data during transmission.
            </li>
          </ul>
          <br />

          <Typography variant="h5">5. Data Sharing and Disclosure</Typography>
          <Typography className="pl-4 font-normal">
            We do not share, sell, or rent your personal information to third
            parties. We may disclose your data only if required by law or to
            protect our rights and interests.
          </Typography>
          <br />

          <Typography variant="h5">6. User Control and Rights</Typography>
          <Typography className="pl-4 font-normal">
            You have the following rights concerning your data:
          </Typography>
          <ul className="pl-6">
            <li className="font-normal">
              • Access: You can request access to the personal information we
              hold about you.
            </li>
            <li className="font-normal">
              • Correction: You can request corrections to any inaccurate or
              incomplete information.
            </li>
            <li className="font-normal">
              • Deletion: You can request the deletion of your personal
              information if you no longer wish to use our services.
            </li>
          </ul>
          <br />

          <Typography variant="h5">
            7. Changes to This Privacy Policy
          </Typography>
          <Typography className="pl-4 font-normal">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            Your continued use of the Bot after any changes indicates your
            acceptance of the new terms.
          </Typography>
          <br />

          <Typography variant="h5">8. Contact Us</Typography>
          <Typography className="pl-4 font-normal">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at
            shevchuk.nikita.gh@gmail.com.
          </Typography>
          <br />

          <Typography variant="h5">9. Effective Date</Typography>
          <Typography className="pl-4 font-normal">
            This Privacy Policy is effective as of 29.07.2024.
          </Typography>
          <br />

          <Typography>
            By using our Bot, you agree to the collection and use of your
            information in accordance with this Privacy Policy. Thank you for
            trusting us with your personal data.
          </Typography>
        </div>
      </Card>
    </div>
  );
}
