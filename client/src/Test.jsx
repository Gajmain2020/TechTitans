import { useEffect } from "react";

function Test() {
  useEffect(() => {
    fetch(
      "https://play.orkes.io/api/workflow/cb19b3e4-5f12-11ee-a227-062517ade8f3?includeTasks=true&summarize=false",
      {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          Cookie:
            "_ga=GA1.1.1039627181.1696019915; _legacy_auth0.W6nz0DKPVrNaHybClVccHC7G8ByMMZD4.is.authenticated=true; auth0.W6nz0DKPVrNaHybClVccHC7G8ByMMZD4.is.authenticated=true; _ga_4400JPTLRF=GS1.1.1696023704.2.1.1696024386.0.0.0; _ga_6DLM7JND12=GS1.1.1696021837.1.1.1696024483.0.0.0",
          Referer:
            "https://play.orkes.io/swagger-ui/index.html?configUrl=/api-docs/swagger-config",
          "Sec-Ch-Ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "Sec-Ch-Ua-Mobile": "?0",
          "Sec-Ch-Ua-Platform": '"Windows"',
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
          "X-Authorization":
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtqbVlNWThEV2VOU1lKZmZSSjFXNSJ9.eyJnaXZlbl9uYW1lIjoiR2FqZW5kcmEiLCJmYW1pbHlfbmFtZSI6IlNhaHUiLCJuaWNrbmFtZSI6Imdham1haW4yMDIwIiwibmFtZSI6IkdhamVuZHJhIFNhaHUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSzFmUTlkZThQNHQ5cksxbF9FaDFfTW81SlZnX2dmOTktVktTTzE5Qjl4cVlvPXM5Ni1jIiwibG9jYWxlIjoiZW4tR0IiLCJ1cGRhdGVkX2F0IjoiMjAyMy0wOS0yOVQyMTo0MToyOC4xNzFaIiwiZW1haWwiOiJnYWptYWluMjAyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hdXRoLm9ya2VzLmlvLyIsImF1ZCI6Ilc2bnowREtQVnJOYUh5YkNsVmNjSEM3RzhCeU1NWkQ0IiwiaWF0IjoxNjk2MDIzNjg5LCJleHAiOjE2OTYwNTk2ODksInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEwMjQ4NjYwMzE3MzU3NjQ2ODMzIiwic2lkIjoib2FMRmdNMnVRT1BndlBkSzBtSHhXNE4zMzFIT0VVMDgiLCJub25jZSI6ImRqUkJVakoyTGxNNWVXMHhSRk10YTA0ME4zSmlNaTVaYjBvMWNGbHJiME5DWjE5aGEzaGxTWGhyZUE9PSJ9.PHZLahucwXwoEBGE0rtOyHhrHkDIadeBkiJJ2oLE6PtmtJWEaBGRWfTDa_9waa_3kcye0n5Ctf4AoOS8YhCQS56AQQ-CFwq8-hnl2rDa5UgnszoYOFxyzf8-rq5rsrmKBdtRnwHPzidU22p_HHHQHOrfYEZe0JzqJjPueueLDSXbUoTYwsTFQz5svTb2Cz8hOxExEN6rkDWHs6BqqipTOKEwOj3TZXyWJi54XxQNgnvG2_mwhE4RrrypGo9VFqYwErZbapEUUgNyEuiU5WsuIX8pBqQU_uD1VWDFmmQxYL7OwgzUhJ3MFcwOjC8upT-J52m73CkCuWCoqXlMaWT1Lw",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>hello world</div>;
}

export default Test;
