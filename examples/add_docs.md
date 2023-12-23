# 向网站中添加文章

1. 在 blogs 目录下新建一个文件夹，文件夹名为文章的英文路径。例如，在 blogs 目录下新建一个文件夹 `hello-world`，则文章的路径为 `https://open-moss.com/hello-world/`。

2. 将文章和相关资源放入文件夹中，默认入口为`index.html`，推荐使用相对路径引用资源。

3. 通过链接 `https://open-moss.com/hello-world/` 测试文章是否能够正常加载。

4. 在目录中添加文章的入口。在 `blogs/index.html` 中搜索 `MARK: Article list begins here`，在这个标记下方添加文章入口，格式参考已有的文章入口，或者示例：
```html
<div class="post-preview peer-reviewed">
    <div class="metadata">
        <div class="publishedDate">Sept. 2, 2021</div>
        <div class="tags">
        <a class="tag peer-reviewed" title="View this article's reviews as Github issues."
            href="https://github.com/distillpub/post--understanding-gnns/issues?q=is%3Aissue+label%3Apeer-review"><span>Peer-reviewed</span></a>
        </div>
    </div>
    <a href="example">
        <!-- <div class="thumbnail"><img src="2021/understanding-gnns/thumbnail.jpg"></div> -->
        <div class="description">
        <h2 class="title">Example Article</h2>
        <p class="authors">Me</p>
        <p class="abstract">Understanding the building blocks and design choices of graph neural networks.</p>
        </div>
    </a>
</div>
```

5. 测试文章入口是否正常显示、链接是否正常跳转。

