# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#


# Article Seed Data

articles = Article.create([
    {
        title: 'PS5 Review',
        text: 'The PS5 is awesome!!!!'
    },
    {
        title: 'Xbox Review',
        text: 'The Xbox stinks!!!!'
    }
])

# Comment Seed Data

comments = Comment.create([
    {
        commenter: 'PS5 Boi',
        body: 'I totally agree man!!!',
        article: Article.first
    },
    {
        commenter: 'Xbox GamerGurl',
        body: 'No, u stink!!!',
        article: Article.last
    }
])