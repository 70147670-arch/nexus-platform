exports.register = async (req, res) => {

  try {

    return res.status(200).json({
      message: "Register Success"
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });

  }

};



exports.login = async (req, res) => {

  try {

    return res.status(200).json({

      token: "test123",

      user: {
        id: 1,
        email: "test@test.com",
        role: "admin"
      }

    });

  } catch (error) {

    return res.status(500).json({
      message: error.message
    });

  }

};