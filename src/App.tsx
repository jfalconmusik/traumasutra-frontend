/*
** React CORS friendly Single Page Application - https://github.com/aws-samples/react-cors-spa 
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// access key id AKIAQD5PTTU33XI35REM

// secret access key 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

// AKIAQD5PTTU36UIGGGUC

// RoYL1gtfx+qqc7sqxGzJwUQtrOpIipKcb/YxRuB+

import logo from "./assets/traumasutra.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import { useFetch } from "react-async";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listSongs, getSong } from "./graphql/queries";
import awsconfig from "./aws-exports";
import { createSong, updateSong, deleteSong } from "./graphql/mutations";
import { isStringTextContainingNode } from "typescript";
Amplify.configure(awsconfig);

type Song = {
  id: String;
  title: String;
  url: String;
};

const runCreateSong = async (): Promise<any> => {
  let song;

  await API.graphql(graphqlOperation(createSong, { input: song }));
};

const runUpdateSong = async (): Promise<any> => {
  await API.graphql(
    graphqlOperation(updateSong, {
      input: { id: isStringTextContainingNode, name: "Song Name" },
    })
  );
};

/* update a todo */
// await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

// /* delete a todo */
// await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));

// Create your traumasutra app with TypeScript
// EC2 and then load balancers
// To be replaced by the endpoint of the API deployed through the CloudFormation Template

const APIEndPoint =
  "https://wjb3dg55vc.execute-api.us-east-1.amazonaws.com/v1/hello";

function App() {
  const [songsArray, setSongsArray] = useState<Song[] | any[]>([undefined]);

  // const runListSongs = (): Promise<any> => {
  //   const resultPromise = new Promise((resolve, reject) => {
  //     resolve(API.graphql(graphqlOperation(listSongs)));
  //   });
  //   return resultPromise;
  //   };

  //   let { songs } = API.graphql(graphqlOperation(getSong, "Waking Dream"));

  // typescript still won't allow setting state to untyped data from the query
  const runListSongs = async (): Promise<Song[] | any> => {
    let promise1 = await API.graphql(graphqlOperation(listSongs));

    const result = Promise.resolve(promise1).then((result) => {
      console.log("result: ", result);
      let obj = result as { data: { listSongs: { items: [] } } };
      console.log(
        "obj.data.listSongs.items as Song[]: ",
        obj.data.listSongs.items as Song[]
      );
      setSongsArray(obj.data.listSongs.items as Song[]);
      return result as Song[];
    });

    return result;
  };

  useEffect(() => {
    runListSongs();
  }, []);

  useEffect(() => {
    console.log("songsArray: ", songsArray);
  }, [songsArray]);

  const [siphoned, setSiphoned] = useState<Song[]>([]);

  useEffect(() => {
    console.log("siphoned: ", siphoned);
  }, [siphoned]);

  useEffect(() => {
    setSiphoned(songsArray);
  }, [songsArray]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${logo})`,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {siphoned?.map((song) => {
        return (
          <div>
            <p>{song && song.title}</p>

            <audio controls>
              <source src={`${song && song.url}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        );
      })}
      <p>Traumasutra</p>
      <div className="logos"></div>
    </div>
  );
}

const APIResult = () => {
  const { data, error } = useFetch(APIEndPoint, {
    headers: { accept: "application/json" },
  });

  if (error) return <p>{error.message}</p>;

  function returnMessage(data: any): String {
    return data.message || "No Message!";
  }

  if (data) return <p>{`${returnMessage(data)}`}</p>;

  return null;
};

export default App;
