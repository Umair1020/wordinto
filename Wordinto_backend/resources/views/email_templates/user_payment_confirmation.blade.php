<!DOCTYPE html>
<html>
<head>
    <title>Payment Confirmation</title>
</head>
<body>
    <h1>Thank you for your payment!</h1>
    <p>Dear {{ $details['senderName'] }},</p>
    <p>Your payment of {{ $details['amount'] }} was successful.</p>
    <p>Thank you for your purchase!</p>
</body>
</html>
