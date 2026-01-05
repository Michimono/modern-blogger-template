# modern-blogger-template
A toolkit to develop blogger templates using a more modern workflow

## Quickstart

To get all dependencies installed just run the following command:

```bash
npm install
```
> 📝 This requires [installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your machine

To build the distribution file run the following command. This will create an `index.xml` file containing the template on the `dist` folder.

```bash
npm run build
```

## Uploading the template to blogger

You can update your blogger template by goint go `theme` on your control panel. Then click the dropdown menu next to the `customize` button and select `restore`. From there, locate the `index.xml` file generated on the `dist` folder and select it.

If everything worked as expected you should see the message `restored theme` at the bottom of the game. Head to your blog to check everything is there.
