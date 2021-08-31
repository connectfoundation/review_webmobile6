# generate model & association
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,salt:string,is_super_host:boolean
npx sequelize-cli model:generate --name Room --attributes name:string,price:integer,max_guest:integer,star_rating:integer,review_num:integer,image_path:string
npx sequelize-cli model:generate --name RoomType --attributes name:string
npx sequelize-cli model:generate --name RoomOption --attributes bed:integer,bedroom:integer,bathroom:integer,free_parking:boolean,wifi:boolean,kitchen:boolean,washer:boolean
npx sequelize-cli migration:generate --name create-bookings
npx sequelize-cli migration:generate --name add-associate

# generate seed file
npx sequelize-cli seed:generate --name init-user
npx sequelize-cli seed:generate --name init-room
npx sequelize-cli seed:generate --name init-room-type
npx sequelize-cli seed:generate --name init-room-option