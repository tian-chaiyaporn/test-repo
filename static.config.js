import path from 'path'
import axios from 'axios'
import { urlNormalizer } from './src/utils/utils'

const isDevelopment = true
const siteRoot = isDevelopment ? 'https://sharp-hopper-c59ec9.netlify.com/' : 'https://wellglo.com'

export default {
	siteRoot,
  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )

    // const getArticles = async () => await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )

    // const getProviders = async () => await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )

    // const getClinics = async () => await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )

    const articles = mockArticleData // await getArticles()
    // const providers = await getProviders()
    // const clinics = await getClinics()
    
    return [
      // {
      //   path: '/blog',
      //   getData: () => ({ posts }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     template: 'src/features/Post',
      //     getData: () => ({ post }),
      //   })),
      // },
      {
        path: '/articles',
        getData: () => ({ articles }),
        children: articles.map(article => ({
          path: `/${urlNormalizer(article.title)}`,
          template: 'src/features/articles/details/Article',
          getData: () => ({ article }),
        })),
      },
      // {
      //   path: '/providers',
      //   getData: () => ({ providers }),
      //   children: providers.map(provider => ({
      //     // path: `/article/${article.title}`,
      //     // template: 'src/features/articles/details/Article',
      //     // getData: () => ({ article }),
      //   })),
      // },
      // {
      //   path: '/clinics',
      //   getData: () => ({ clinics }),
      //   children: articles.map(article => ({
      //     // path: `/article/${article.title}`,
      //     // template: 'src/features/articles/details/Article',
      //     // getData: () => ({ article }),
      //   })),
      // },
    ]
  },
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

const mockArticleData = [
  {
    id: '1',
    img: 'https://picsum.photos/335/240',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes',
    dateAndTimeToRead: 'Feb 20 - 3 min read',
    thumbnail: 'https://picsum.photos/150/150',
    title: 'What Is a Cardiologist?',
    subtitle: 'Learn the basic of a heart specialist',
    content: "<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.</p><p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt auctor finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas enim purus, fringilla nec sapien quis, fringilla tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin porttitor libero id velit mattis, quis luctus mi pellentesque. Etiam vehicula interdum pellentesque. Sed eleifend et nisl in accumsan. Quisque vestibulum ex nibh, at scelerisque turpis venenatis eget. Mauris mollis lorem quis odio ullamcorper scelerisque.</p><p>Nullam dignissim dapibus augue, eget aliquam odio porttitor id. Morbi volutpat ut enim eget pharetra. Vestibulum at iaculis est, eget mattis ante. Suspendisse tincidunt dolor quis mollis cursus. Proin convallis lectus in mauris venenatis dictum. Aliquam laoreet purus turpis, et auctor ipsum ornare eu. Mauris libero nisl, ultrices a malesuada vel, molestie a leo. Integer tempor vehicula leo, vel tempus magna. Curabitur ac orci a ligula mollis maximus. Mauris sit amet justo elementum eros suscipit placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien purus, molestie nec mauris quis, tincidunt dictum velit.</p><p>Fusce scelerisque felis eget turpis finibus interdum. Nunc mollis, dolor ut consequat efficitur, nulla libero imperdiet nisl, ut accumsan leo enim eu velit. Morbi posuere venenatis neque, non elementum est. Aenean molestie, nibh sit amet eleifend malesuada, dolor dolor bibendum nulla, dignissim laoreet orci urna eu arcu. Aliquam placerat nulla nec cursus faucibus. Etiam vestibulum elit et leo semper posuere. Nam volutpat dignissim neque, in efficitur enim fringilla sit amet. Nulla commodo mollis purus, eget pellentesque sapien dapibus at. Integer sit amet risus eu enim maximus sollicitudin.</p><p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis volutpat faucibus nibh. Nulla luctus consequat consequat. Cras risus lorem, faucibus ac lobortis quis, porttitor a leo. Aliquam blandit ultricies mattis. Phasellus dignissim, mi non scelerisque molestie, diam metus volutpat tellus, ac dictum lorem ex id justo. Phasellus viverra enim justo, luctus tristique purus interdum ullamcorper. Morbi molestie ante a purus viverra, et ultricies arcu faucibus. Sed ut commodo lacus. Maecenas eu iaculis tortor. Maecenas condimentum urna mauris, ut lobortis lacus lobortis sed. Phasellus consectetur eros commodo posuere vestibulum.</p></div>"
  },
  {
    id: '2',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames 2',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '3',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames 3',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '4',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames 4',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '5',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames 5',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '6',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames 6',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
]
