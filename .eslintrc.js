module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
  ],
  rules: {
    "vue/no-multiple-template-root": "off", // 关闭多根节点的校验
    quotes: ["error", "double"], // 引号规则为：“双引号”
    "linebreak-style": ["off", "windows"], // 关闭换行规则校验
    semi: ["warn", "never"], // 结尾不允许 + 分号
    "import/extensions": [ // 这个是解决不写后缀报错的问题
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "never",
      },
    ],
    "vue/multi-word-component-names": ["off", { // 组件名称必须是多个单词组成校验
      ignores: [],
    }],
  },
}
