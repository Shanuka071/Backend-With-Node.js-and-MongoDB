const mongoose = require('mongoose');

// 1. Connect to your local MongoDB server
mongoose.connect('mongodb://localhost:27017/GymDatabase')
  .then(async () => {
    console.log('Successfully connected to MongoDB!');

    // 2. Define what a Gym Member looks like (Schema blueprint)
    const memberSchema = new mongoose.Schema({
      name: String,
      membershipType: String,
      joinDate: { type: Date, default: Date.now }
    });

    // Create the Member model based on the schema
    const Member = mongoose.model('Member', memberSchema);

    // 3. Clear out old data so we start fresh every time we run it
    await Member.deleteMany({});

    // 4. Add a member into your database
    const newMember = await Member.create({
      name: "Shanuka",
      membershipType: "Gold VIP"
    });
    console.log('Member Added Successfully:', newMember);

    // 5. Search the database to read the data back and print it
    const allMembers = await Member.find({});
    console.log('All Members in Database:', allMembers);

    // Close the connection when completely done
    mongoose.connection.close();
    console.log('Database connection closed safely.');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });