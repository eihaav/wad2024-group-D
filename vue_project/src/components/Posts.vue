<template>
    <div class="posts">
        <div v-for="post in postsWithDates" :key="post.id" :post="post">
            <a class='postContent' :href="'/api/singlepost/' + post.id">
                <article class="post">
                    <header class="postHeader">
                        <p class="date"> {{ post.humanReadableDate }} </p> <br />
                    </header>
                    <div class="postContent">
                        <p class="body"> {{ post.body }} </p> <br />
                    </div>
                </article>
            </a>
        </div>

    </div>
</template>

<script>
//import Post from '@/components/Post.vue'

export default {
    name: 'Posts',
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        fetchPosts() {
            fetch(`http://localhost:3000/api/posts/`, {
                credentials: 'include',
            })
                .then((response) => response.json())
                .then((data) => (this.posts = data))
                .catch((err) => console.log(err.message));
        },
    },
    mounted() {
        this.fetchPosts();
        console.log("mounted");
    },
    debug() {
        console.log("This method was reached");
    },
    computed: {
        postsWithDates() {
            return this.posts.map(post => {
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

                const machineDate = new Date(post.date);
                const month = monthMap[machineDate.getMonth()];
                const humanReadableDate = `${month} ${machineDate.getUTCDate()}, ${machineDate.getUTCFullYear()}`;

                // Return a new object with the computed date
                return {
                    ...post,
                    humanReadableDate
                };
            });
        }
    }
}
</script>

<style scoped>
.posts {

    margin-left: 1%;
    margin-right: 1%;
    margin-top: 0px;
    width: 100%;
}

.postHeader {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 0px;
}

.postHeader p {
    justify-self: flex-end;
    text-align: right;
}

.postContent p {
    align-self: flex-start;
}

.postContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
    color: black;
    text-decoration: none;
}


article {
    background-color: lightgray;
    margin-bottom: 20px;
    width: 100%;
}
</style>