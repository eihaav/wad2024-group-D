/*async function GetPostData(){
    const url = "https://api.jsonsilo.com/public/255e8cdc-2a8f-47e4-ade6-f50c448a4b6f";
    try 
    {
        const response = await fetch(url);
        if (!response.ok) 
            {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        //console.log(json);
        PopulatePosts(json);
      } 
      catch (error) 
      {
        console.error(error.message);
      }
}*/

async function GetLocalPostData(){
  const path = "src/posts.json";
  try 
  {
      const response = await fetch(path);
      if (!response.ok) 
          {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      PopulatePosts(json);
    } 
    catch (error) 
    {
      console.error(error.message);
    }
}


async function PopulatePosts(postsJson){
    const postsDiv = document.getElementsByClassName("posts");
    postsJson["posts"].sort((a, b) => {return new Date(b["date"]).getTime() - new Date(a["date"]).getTime()})
    for (let index = 0; index < postsJson["posts"].length; index++) {
        const postData = postsJson["posts"][index];
        let postWrapper = document.createElement("article");

        let postHeader = document.createElement("header");
        postHeader.className = "postHeader";
        let profilePicture = document.createElement("img");
        profilePicture.setAttribute("src", "src/blank-profile-picture.webp");
        profilePicture.setAttribute("alt", "Blank Profile Picture");
        let postDate = new Date(postData["date"]);
        let postDateDisplay = document.createElement("p");
        postDateDisplay.textContent = DateToHumanReadable(postDate);

        let postContent = document.createElement("div");
        postContent.className = "postContent";
        if (postData["media"] != ""){
            let postMedia = document.createElement("img");
            postMedia.setAttribute("src", postData["media"]);
            postContent.appendChild(postMedia);
        }
        
        let postTextParagraph = document.createElement("p");
        let postText = document.createTextNode(postData["content"]);
        postTextParagraph.appendChild(postText);
        postContent.appendChild(postTextParagraph);

        let likeButton = document.createElement("img");
        likeButton.setAttribute("src", "src/likeButton.png");
        likeButton.setAttribute("alt", "Like this Post");
        likeButton.className = "likeButton";

        postHeader.appendChild(profilePicture);
        postHeader.appendChild(postDateDisplay);
        postWrapper.appendChild(postHeader);
        postWrapper.appendChild(postContent);
        postWrapper.appendChild(likeButton)
        postsDiv[0].appendChild(postWrapper);
    }

}
function DateToHumanReadable(date){
    const monthMap = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec"
    };
    let month = monthMap[date.getMonth()]
    let humanReadable = month + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
    return humanReadable;
}


// GetPostData()
GetLocalPostData()