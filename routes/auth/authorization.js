const OktaJwtVerifier = require('@okta/jwt-verifier');
const token = "eyJraWQiOiJOZ2hVYzN4THFOYVJUY3NHMDhOX2h6bDgzaG01VUp5b3poR2JaWDVLdmJZIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxNmVvbmlpQldOUDdmTTR4NiIsIm5hbWUiOiJQZXRlciBDb25uZWxseSIsImxvY2FsZSI6ImVuLVVTIiwiZW1haWwiOiJwY29ubmVsbHk4OThAZ21haWwuY29tIiwidmVyIjoxLCJpc3MiOiJodHRwczovL2Rldi04NDQ3NTMub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiIwb2ExOXBobDN3RW45UjFpSTR4NiIsImlhdCI6MTU4MTE4NTg2OCwiZXhwIjoxNTgxMTg5NDY4LCJqdGkiOiJJRC5yajhpSkQ5VGFMelh6ZDBiUXpPX1dKVXBNWUVQYWlmV21oUldTdFFQQ09zIiwiYW1yIjpbInB3ZCJdLCJpZHAiOiIwMG8xNmVva2ZtT01HSUlhcTR4NiIsIm5vbmNlIjoiU2w0WjZ6elR1RjJPSm9JOENzMFRHNVpMc0JvUGNZU2NlVklDWE55dmFMTVRwRmYxZ01qNVVaVkhFUklqaUhnQiIsInByZWZlcnJlZF91c2VybmFtZSI6InBjb25uZWxseTg5OEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiUGV0ZXIiLCJmYW1pbHlfbmFtZSI6IkNvbm5lbGx5Iiwiem9uZWluZm8iOiJBbWVyaWNhL0xvc19BbmdlbGVzIiwidXBkYXRlZF9hdCI6MTU4MDc4MDYyOCwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF1dGhfdGltZSI6MTU4MTE4NTg2OH0.k84CtV7OWBEK9PEtyUzbdtxhOfBOn8kxQ6F1c-wn6_yeJBwgeGo2DW4AVYURxt5aCgtDaprfTB6SIS83-nFLnVh5Y5YZJgBPmNJkR8gTh_akAn76VoMoAqJXWskJlpgaKQSeHIxi9PaMhgpDBP_n2_HKvTG3QXVBe05jSxav37C7lSpoh9EZBymI-SOVHv_V506RvmkaO_trSMwHEpWW6W1GFUGYWciIGjyYqARlXPXOyNWfz0bkBqgO3q95FQcCeUWYSRJolgvWlWB6ZMoO6B2NYWOSOwoei_gwOONxqX2GWSdhXsQy4b4OLYR_dFOrhYSDWZ5crNKiTiyruPHpQw"
// ,"claims":{"sub":"00u16eoniiBWNP7fM4x6","name":"Peter Connelly","locale":"en-US","email":"pconnelly898@gmail.com","ver":1,"iss":"https://dev-844753.okta.com/oauth2/default","aud":"0oa19phl3wEn9R1iI4x6","iat":1581185868,"exp":1581189468,"jti":"ID.rj8iJD9TaLzXzd0bQzO_WJUpMYEPaifWmhRWStQPCOs","amr":["pwd"],"idp":"00o16eokfmOMGIIaq4x6","nonce":"Sl4Z6zzTuF2OJoI8Cs0TG5ZLsBoPcYSceVICXNyvaLMTpFf1gMj5UZVHERIjiHgB","preferred_username":"pconnelly898@gmail.com","given_name":"Peter","family_name":"Connelly","zoneinfo":"America/Los_Angeles","updated_at":1580780628,"email_verified":true,"auth_time":1581185868},"expiresAt":1581189468,"scopes":["openid","email","profile"],"authorizeUrl":"https://dev-844753.okta.com/oauth2/default/v1/authorize","issuer":"https://dev-844753.okta.com/oauth2/default","clientId":"0oa19phl3wEn9R1iI4x6"}}"const oktaJwtVerifier = new OktaJwtVerifier({
let oktaJwtVerifier = new OktaJwtVerifier({
    issuer: 'https://dev-844753.okta.com/oauth2/default',
});
const verifyBlanketUser = (req, res, next) => {
    console.log("we got in here");
    oktaJwtVerifier.verifyAccessToken(accessTokenAsString, "0oa19phl3wEn9R1iI4x6")
    .then(token => {
        const { email, name, sub }
        req.user =
    })
    .catch(error => {
        console.log(error);
    })
}
verifyBlanketUser(token);





