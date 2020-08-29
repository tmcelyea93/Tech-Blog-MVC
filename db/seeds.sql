INSERT INTO user (username, password)
VALUES ('my dog', 'Manning3'),
       ('Lolagirl', 'flower2!'),
       ('the clown', 'scary#74'),
       ('booklover', 'chapter0#8'),
       ('happyday', 'c0ffee83$');


INSERT INTO post (title, contents, user_id, created_at, updated_at)
VALUES ('the first', 'beginning post', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('the second', 'lots of words blah blah in the comments', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('the third', 'lots of words blah blah in the comments', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('the fourth', 'lots of words blah blah in the comments', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('the last', 'final post', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comment (comment_text, user_id, post_id, created_at, updated_at)
VALUES ('example comment', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 2, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 3, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 5, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 4, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 3, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('example comment', 5, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);