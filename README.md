游戏地址：https://game.maj-soul.com/

这个软件是为了我方便查找役种写的。

# 牌的编码
每张牌都有唯一的编码，
万字用 m 表示，筒子用 p 表示，条子用 s 表示，字牌用 z 表示，
所以 1 万的编码是 1m，9 筒的编码是 9p， 5 条的编码是 5s， 东南西北白发中的编码分别是 1z、22、3z、4z、5z、6z 和 7z，
特殊的红 5 万用表示，红 5 筒用 p 表示，红 5 条用 0s 表示。
因此牌山可以唯一的用一串字符序列来表示。假设牌山是 8 筒 7 索 东风红 5 万的话，那么编码序列就是 8p7s1z0m。

总结：万m，筒p，条s，字z。

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
