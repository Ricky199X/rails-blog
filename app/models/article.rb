class Article < ApplicationRecord

    # validates article title and minimum length of title
    validates :title, presence: true,
        length: { minimum: 5}


end
