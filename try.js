const http = require("http");

var headers = {
    'x-api-key': 'aMFouLkMjcxGopFBPmzjWGMKQCkVKPDMsghukTvPHaPWzsqALZZFfGRtpBgvEKVVLGDJjDBavveHcoVKhuqjovsRWhkgGEQiyRmX',
    'x-app-version': '1.0.0',
    'x-apihub-key': 'a9XF6PKqtvtY5fj1FrSuMHQ70r159XezxOfcSEfw2ehGcFqyRP',
    'x-apihub-host': 'Urban-Dictionary.allthingsdev.co'
 };
 var request = http.Request('GET', Uri.parse('https://Urban-Dictionary.proxy-production.allthingsdev.co/api/v1/dictionary/words-with-defintion?skip=0&limit=5'));
 
 request.headers.addAll(headers);
 
 http.StreamedResponse response = await request.send();
 
 if (response.statusCode == 200) {
    print(await response.stream.bytesToString());
 }
 else {
    print(response.reasonPhrase);
 }