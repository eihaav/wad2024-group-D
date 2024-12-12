import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    postList: [
      {
        id: 0,
        date: "2024-09-30, 18:45",
        media: "",
        author: "EIHaav",
        content: "This is an example of post content. This is the very first post made on this site.",
        likeCount: 0
      },
      {
        id: 1,
        date: "2024-10-01, 13:27",
        media: "",
        author: "EIHaav",
        content: "This is another post. It may have been obvious but this was posted after the previous post.",
        likeCount: 0
      },
      {
        id: 2,
        date: "2024-10-01, 14:41",
        media: "images/TartuRaekoda.webp",
        author: "EIHaav",
        content: "This is yet another post. This time there's a picture!",
        likeCount: 0
      },
      {
        id: 3,
        date: "2024-10-01, 16:20",
        media: "images/TartuPortrait.webp",
        author: "EIHaav",
        content: "This, too, is a post. This time I'm trying out a portrait photo.",
        likeCount: 0
      },
      {
        id: 4,
        date: "2024-10-02, 12:10",
        media: "",
        author: "EIHaav",
        content: "This is the fifth and final post for now. I think I ought to make this one a bit longer to test out how these are displayed.\nMight as well add a line break for good measure.",
        likeCount: 0
      },
      {
        id: 5,
        date: "2024-10-28, 18:11",
        media: "",
        author: "EIHaav",
        content: "The second wave of posts starts now.",
        likeCount: 0
      },
      {
        id: 6,
        date: "2024-10-28, 19:31",
        media: "images/fellOmen.webp",
        author: "EIHaav",
        content: "Put these foolish ambitions to rest.",
        likeCount: 0
      },
      {
        id: 7,
        date: "2024-10-28, 20:24",
        media: "",
        author: "EIHaav",
        content: "Kind of a struggle when you have to get to 10 posts but you have nothing smart to say. #sadtimes",
        likeCount: 0
      },
      {
        id: 8,
        date: "2024-10-31, 07:06",
        media: "",
        author: "EIHaav",
        content: "Happy halloween!!!",
        likeCount: 0
      },
      {
        id: 9,
        date: "2024-10-31, 19:11",
        media: "",
        author: "EIHaav",
        content: "This spot marks our last post. But you may post here too, if you like.",
        likeCount: 0
      }
    ]
  },
  getters: {
    humanReadablePosts: state => {
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
      let sortedPostList = state.postList;
      sortedPostList.sort((a, b) => { return new Date(b["date"]).getTime() - new Date(a["date"]).getTime() })
      var humanReadablePosts = sortedPostList.map(post => {
        let machineDate = new Date(post.date);
        let month = monthMap[machineDate.getMonth()]
        let humanReadable = month + " " + machineDate.getUTCDate() + ", " + machineDate.getUTCFullYear();
        return {
          id: post.id,
          date: humanReadable,
          media: post.media,
          author: post.author,
          content: post.content,
          likeCount: post.likeCount
        }
      });
      return humanReadablePosts;
    }
  },
  mutations: {
    LikePost: (state, postId) => {
      state.postList.forEach(post => {
        if (postId === post.id) {
          post.likeCount += 1;
        }
      })
    },
    ResetLikes: state => {
      state.postList.forEach(post => {
        post.likeCount = 0;
      })
    }
  },
  actions: {
    LikePostAct: ({ commit }, postId) => {
      setTimeout(function () {
        commit("LikePost", postId)
      }, 200)
    },
    ResetLikesAct: act => {
      setTimeout(function () {
        act.commit("ResetLikes")
      }, 200)
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    })
  ]
})
