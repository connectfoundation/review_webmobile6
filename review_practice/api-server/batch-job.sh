# convert csv to json
cd init-data
node ../util/csv-converter.js room_data.csv .
node ../util/csv-converter.js room_option_data.csv .

# sequelize cli seed all
cd ..
npx sequelize-cli db:seed:all