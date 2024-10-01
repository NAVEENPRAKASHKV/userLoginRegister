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
        res.render('user/login.hbs', { message: 'User created successfully Please login' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in registration");
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body; // Get email and password from request body
        // Check if the user exists
        const user = await userScheme.findOne({ email });
        if (!user) {
            return res.render("user/login", { message: " you are not registered" }); // User not found
        }
        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("user/login", { message: "Invalid email or password" }); // Password does not match
        }
        // At this point, the user is authenticated
        // req.session.userId = user._id  Set user ID in session (if using session management)
        res.redirect('/dashboard'); // Redirect to dashboard or another page
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in login");
    }
};

const loadLogin = (req, res) => {
    res.render("user/login.hbs");
}

const loadRegister = (req, res) => {
    res.render('user/register.hbs');
}

module.exports = { registerUser, loadLogin, loadRegister, login };
