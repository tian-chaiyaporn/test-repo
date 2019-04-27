import path from 'path'
import axios from 'axios'

export default {
  // getRoutes: async () => {
  //   const { data: posts } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   )
  //   // const { data: articles } = await axios.get(
  //   //   'https://jsonplaceholder.typicode.com/posts'
  //   // )

  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({ posts }),
  //       children: posts.map(post => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/features/Post',
  //         getData: () => ({ post }),
  //       })),
  //     },
  //     // {
  //     //   path: '/articles',
  //     //   getData: () => ({ articles }),
  //     //   children: articles.map(article => ({
  //     //     path: `/article/${article.title}`,
  //     //     template: 'src/features/articles/details/Article',
  //     //     getData: () => ({ article }),
  //     //   })),
  //     // },
  //   ]
  // },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-styled-components')
  ],
}
