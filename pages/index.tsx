import Image from "next/image";
import { Inter } from "next/font/google";
import Editor from "@/components/editor";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { isValidYouTubeUrl } from "./helper";
import { CustomizedSnackbars } from "@/components/alerts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [URL, setURL] = useState("");
  const [invalidURL, setInvalidURL] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    const validUrl =isValidYouTubeUrl(URL);
    setInvalidURL(validUrl);
    if(!validUrl){
      setOpen(true);
    }
    else{
      
    }
  };

  return (
    <>
      <CustomizedSnackbars
        message="Invalid Youtube URL"
        severity="error"
        open={open}
        setOpen={setOpen}
      />

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        {/* <aside>
      heheh
    </aside> */}

        <div className="relative gap-6 flex-col flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Box display={"flex"} gap={3}>
            <TextField
              variant="outlined"
              fullWidth
              value={URL}
              label="YouTube URL"
              onChange={(e) => setURL(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                  "& input": {
                    color: "white", // Text color inside the input
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // Label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when focused
                },
              }}
            />

            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
          <Editor />
        </div>
      </main>
    </>
  );
}
