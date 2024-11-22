<template>
    <div class="posts">
        <Post v-for="post in humanReadablePosts" :key="post.id" :post="post"></Post>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
    name: 'Posts',
    components: {
        Post,
    },
    data: function () {
        return {
        }
    },
    computed: {
        humanReadablePosts() {
            return this.$store.getters.humanReadablePosts
        }
    }
};
</script>

<style scoped>
.posts {

    margin-left: 1%;
    margin-right: 1%;
    margin-top: 0px;
}
</style>