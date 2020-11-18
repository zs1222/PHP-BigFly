<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        require 'phpmailer/PHPMailerAutoload.php';
        # FIX: Replace this email with recipient email

        # Sender Data
        $origin = trim($_POST["origin"]);
        $dest = trim($_POST["dest"]);
        $name = trim($_POST["fname"]). ' '. trim($_POST["lname"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $passengers = trim($_POST["passengers"]);
        $trip = trim($_POST["trip"]);
        $depdate = trim($_POST["depdate"]);
        $deptime = trim($_POST["deptime"]);
        $subject = $name. ' via BigFly';
        $message = trim($_POST["notes"]);

         # Mail Content
         $content = "<p>Name: $name</p>";
         $content .= "<p>Email: $email</p>";
         $content .= "<p>Phone: $phone</p>";
         $content .= "<p>Origin: $origin</p>";
         $content .= "<p>Destination: $dest</p>";
         $content .= "<p>Passengers: $passengers</p>";
         $content .= "<p>Trip: $trip</p>";
         $content .= "<p>Departure Date: $depdate</p>";
         $content .= "<p>Departure Time: $deptime</p>";
         $content .= "<p>Notes: $message</p>";

         // # email headers.
        // $headers = "From: $name <$email>";

        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject) OR empty($message)) {
            # Set a 400 (bad request) response code and exit.
            return http_response_code(400);
            // exit;
        }

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Username = '';
        $mail->Password = '';

        $mail->setFrom($email, $name);
        $mail->addAddress('');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = 'Form Submission: '. $subject;
        $mail->Body = $content;
        //var_dump($mail->send());

        # Send the email.
        // $success = mail($mail_to, $subject, $content, $headers);
        if ($mail->send()) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            // echo json_encode(http_response_code(200));
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            // echo json_encode(http_response_code(500));
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        // echo "There was a problem with your submission, please try again.";
    }

?>
