// 1. Select or create your Gym Database
use('GymDatabase');

// 2. Clear out any old data so we start fresh
db.members.drop();

// 3. Add a member to your gym database (Like your schema!)
db.members.insertOne({
  name: "Shanuka",
  membershipType: "Gold VIP",
  joinDate: new Date()
});

// 4. Search the database to show the result on your screen
db.members.find({});