<template>
    <article class="post">
        <header class="postHeader">
            <img src="@/assets/blank-profile-picture.webp" alt="Blank Profile Picture">
            <p>{{ post.date }}</p>
        </header>
        <div class="postContent">
            <img v-if="post.media != ''" :src="post.media">
            <p>
                {{ post.content }}
            </p>
        </div>
        <span class="likeCounter" v-if="post.likeCount != 1"><img src="@/assets/likeButton.png" alt="Like this Post"
                class="likeButton" v-on:click="likePost(post.id)">
            {{ post.likeCount }} likes</span>
        <span class="likeCounter" v-else><img src="@/assets/likeButton.png" alt="Like this Post" class="likeButton"
                v-on:click="likePost(post.id)">
            {{ post.likeCount }} like</span>
    </article>
</template>
<script>
export default {
    name: "Post",
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {
        fetchAPost(id) {
            fetch(`http://localhost:3000/api/posts/${id}`)
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
        },
    }
}
</script>

<style scoped>
.postHeader>img {
    height: 25px;
    border-radius: 50%;
}

.postHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0px;
}

.postContent p {
    white-space: pre-line;
}

.postContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.postContent img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 0px;
    margin-top: 0px;
    align-self: center;
}

article {
    background-color: lightgray;
    margin-bottom: 20px;
}

.likeButton {
    height: 30px;
    cursor: pointer;
}

.likeCounter {
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
</style>