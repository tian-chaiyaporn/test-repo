

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
      t_0.template = '../src/pages/404.js'
      
const t_1 = universal(import('../src/pages/about.js'), universalOptions)
      t_1.template = '../src/pages/about.js'
      
const t_2 = universal(import('../src/pages/articles.js'), universalOptions)
      t_2.template = '../src/pages/articles.js'
      
const t_3 = universal(import('../src/pages/blog.js'), universalOptions)
      t_3.template = '../src/pages/blog.js'
      
const t_4 = universal(import('../src/pages/careers.js'), universalOptions)
      t_4.template = '../src/pages/careers.js'
      
const t_5 = universal(import('../src/pages/clinics.js'), universalOptions)
      t_5.template = '../src/pages/clinics.js'
      
const t_6 = universal(import('../src/pages/contact.js'), universalOptions)
      t_6.template = '../src/pages/contact.js'
      
const t_7 = universal(import('../src/pages/directory.js'), universalOptions)
      t_7.template = '../src/pages/directory.js'
      
const t_8 = universal(import('../src/pages/help.js'), universalOptions)
      t_8.template = '../src/pages/help.js'
      
const t_9 = universal(import('../src/pages/index.js'), universalOptions)
      t_9.template = '../src/pages/index.js'
      
const t_10 = universal(import('../src/pages/providers.js'), universalOptions)
      t_10.template = '../src/pages/providers.js'
      
const t_11 = universal(import('../src/pages/search.js'), universalOptions)
      t_11.template = '../src/pages/search.js'
      
const t_12 = universal(import('../src/pages/test/article.js'), universalOptions)
      t_12.template = '../src/pages/test/article.js'
      
const t_13 = universal(import('../src/pages/test/clinic-details.js'), universalOptions)
      t_13.template = '../src/pages/test/clinic-details.js'
      
const t_14 = universal(import('../src/pages/test/provider-details.js'), universalOptions)
      t_14.template = '../src/pages/test/provider-details.js'
      
const t_15 = universal(import('../src/pages/test/test-component.js'), universalOptions)
      t_15.template = '../src/pages/test/test-component.js'
      

// Template Map
export default {
  '../src/pages/404.js': t_0,
'../src/pages/about.js': t_1,
'../src/pages/articles.js': t_2,
'../src/pages/blog.js': t_3,
'../src/pages/careers.js': t_4,
'../src/pages/clinics.js': t_5,
'../src/pages/contact.js': t_6,
'../src/pages/directory.js': t_7,
'../src/pages/help.js': t_8,
'../src/pages/index.js': t_9,
'../src/pages/providers.js': t_10,
'../src/pages/search.js': t_11,
'../src/pages/test/article.js': t_12,
'../src/pages/test/clinic-details.js': t_13,
'../src/pages/test/provider-details.js': t_14,
'../src/pages/test/test-component.js': t_15
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.js"

