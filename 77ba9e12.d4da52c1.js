(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),i=(n(0),n(157)),a={id:"redux-integration",title:"Redux Integration"},s={id:"redux-integration",title:"Redux Integration",description:"This section deals with testing RN applications developed with Redux. We will be developing a simple TODO application capable of adding and removing an item. Once included, the timestamp is included.",source:"@site/docs/ReduxIntegration.md",permalink:"/react-native-testing-library/docs/redux-integration",editUrl:"https://github.com/callstack/react-native-testing-library/blob/master/docs/ReduxIntegration.md",sidebar:"docs",previous:{title:"React Navigation",permalink:"/react-native-testing-library/docs/react-navigation"}},c=[{value:"Setting up",id:"setting-up",children:[]},{value:"Test cases",id:"test-cases",children:[]},{value:"Running tests",id:"running-tests",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section deals with testing RN applications developed with Redux. We will be developing a simple TODO application capable of adding and removing an item. Once included, the timestamp is included."),Object(i.b)("h2",{id:"setting-up"},"Setting up"),Object(i.b)("p",null,"An example of setting up can be found ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/tree/master/examples/redux"}),"here"),"."),Object(i.b)("h2",{id:"test-cases"},"Test cases"),Object(i.b)("p",null,"Our test is on the components that either dispatch actions on the redux store or read some data from the redux store. This means we will test ",Object(i.b)("inlineCode",{parentName:"p"},"./components/TodoElem.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"./components/TodoList.js"),". Thus we will create ",Object(i.b)("inlineCode",{parentName:"p"},"./components/AddTodo.test.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"./components/TodoList.test.js")),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"./components/AddTodo.test.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Provider } from 'react-redux';\nimport { cleanup, fireEvent, render } from '@testing-library/react-native';\nimport configureStore from '../store';\nimport AddTodo from './AddTodo';\n\ndescribe('AddTodo component test', () => {\n  test('adds a new TODO when the button is pressed', () => {\n    const store = configureStore();\n\n    const component = (\n      <Provider store={store}>\n        <AddTodo />\n      </Provider>\n    );\n\n    const { getByPlaceholderText, getByText } = render(component);\n\n    // There is a TextInput.\n    // https://github.com/callstack/react-native-testing-library/blob/ae3d4af370487e1e8fedd8219f77225690aefc59/examples/redux/components/AddTodo.js#L24\n    const input = getByPlaceholderText(/repository/i);\n    expect(input).toBeTruthy();\n\n    const textToEnter = 'This is a random element';\n    fireEvent.changeText(input, textToEnter);\n    fireEvent.press(getByText('Submit form'));\n\n    const todosState = store.getState().todos;\n\n    expect(todosState.length).toEqual(1);\n\n    expect(todosState).toEqual(\n      expect.arrayContaining([\n        expect.objectContaining({\n          id: 1,\n          text: textToEnter,\n          date: expect.any(Date),\n        }),\n      ])\n    );\n  });\n});\n")),Object(i.b)("p",null,"For the ",Object(i.b)("inlineCode",{parentName:"p"},"./components/TodoList.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Provider } from 'react-redux';\nimport { fireEvent, render } from '@testing-library/react-native';\nimport configureStore from '../store';\nimport TodoList from './TodoList';\n\ndescribe('TodoList component test', () => {\n  test('it should execute with a store with 4 elements', () => {\n    const initialState = {\n      todos: [\n        { id: 1, text: 'Sing something', date: new Date() },\n        { id: 2, text: 'Dance something', date: new Date() },\n        { id: 3, text: 'Sleep something', date: new Date() },\n        { id: 4, text: 'Sleep something', date: new Date() },\n      ],\n    };\n    const store = configureStore(initialState);\n\n    const component = (\n      <Provider store={store}>\n        <TodoList />\n      </Provider>\n    );\n\n    const { getAllByText } = render(component);\n    const todoElems = getAllByText(/something/i);\n\n    expect(todoElems.length).toEqual(4);\n  });\n\n  test('should execute with 2 elements and end up with 1 after delete', () => {\n    const initialState = {\n      todos: [\n        { id: 1, text: 'Sing something', date: new Date() },\n        { id: 2, text: 'Dance something', date: new Date() },\n      ],\n    };\n    const store = configureStore(initialState);\n\n    const component = (\n      <Provider store={store}>\n        <TodoList />\n      </Provider>\n    );\n\n    const { getAllByText } = render(component);\n    const todoElems = getAllByText(/something/i);\n\n    expect(todoElems.length).toBe(2);\n\n    const buttons = getAllByText('Delete');\n    expect(buttons.length).toBe(2);\n\n    fireEvent.press(buttons[0]);\n    expect(getAllByText('Delete').length).toBe(1);\n  });\n});\n")),Object(i.b)("h2",{id:"running-tests"},"Running tests"),Object(i.b)("p",null,"To run the tests, place a test script inside your package.json"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')),Object(i.b)("p",null,"And run the test script with npm test or yarn test."))}l.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(b,s({ref:t},d,{components:n})):r.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);