const userScheme = require('../model/userModel'); // Ensure the correct path is used
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if there is any existing user
        const user = await userScheme.findOne({ email });
        if (user) {
            return res.render("user/register", { message: "User already exists" }); // Return an error if user exists
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = new userScheme({ 
            email,
            password: hashedPassword // Store the hashed password
        });

        await newUser.save(); // Save the new user
        res.render('user/login.hbs', { message: 'User created successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in registration");
    }
};

module.exports = { registerUser };
