const Company = require("../models/Company");

// @desc    Show add page
// @route   GET /companies/addCompany
exports.showAddPage = (req, res) => {
  res.render("addCompany.ejs");
};

// @desc    Process add form
// @route   POST /companies
exports.createCompany = async (req, res) => {
  console.log(req.body);
  try {
    const uniqID = await req.user.id;
    const company = await Company.create({
      userId: uniqID,
      companyName: req.body.companyName,
      // Added a default date for current date
      dateAdded: req.body.dateAdded || new Date(),
      url: req.body.url,
      role: req.body.role,
      roleURL: req.body.roleURL,
      position: req.body.position,
      source: req.body.source,
      pointOfContact: {
        name: req.body.pocName,
        position: req.body.pocPosition,
        email: req.body.pocEmail,
      },
      application: {
        // If the property value is undefined, set the value to 'no' instead
        applied: req.body.applied || "no",
        applyDate: req.body.applyDate,
        coffeeChat: req.body.coffeeChat || "no",
        coffeeChatDate: req.body.coffeeChatDate,
        saidThanks: req.body.saidThanks || "no",
        interviewDate: req.body.interviewDate,
        followUpDate: req.body.followUpDate,
      },
      comments: req.body.comments,
    });
    console.log("Company Data has been added!");
    console.log(company);
    res.redirect("/companies");
  } catch (err) {
    console.log(err);
  }
};

// @desc    Show all companies
// @route   GET /companies
exports.showCompanies = async (req, res) => {
  try {
    const companies = await Company.find({ userId: req.user.id }).lean();
    res.render("companies.ejs", {
      companies,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
};

// @desc    Show edit page
// @route   GET /companies/edit/:id
exports.editCompany = async (req, res) => {
  try {
    const company = await Company.findOne({
      _id: req.params.id,
    }).lean();
    if (!company) {
      return res.render("error/404");
    }
    if (company.userId != req.user.id) {
      res.redirect("/companies");
    } else {
      res.render("editCompany", {
        company,
      });
    }
  } catch (err) {
    console.error(err);
    return res.render("error/500");
  }
};

// @desc    Update company
// @route   PUT /companies/:id
exports.updateCompany = async (req, res) => {
  console.log("Log of request body", req.body);
  // Filtering falsy values of the body object to prevent overwriting existing values if null or """
  // Front End validation should cover the pointOfContact and application objects
  // * See js/editcompanies js for the logic inside the fetch *
  const {
    companyName,
    dateAdded,
    url,
    role,
    roleURL,
    position,
    source,
    pointOfContact,
    name,
    application,
    comments,
  } = req.body;

  let filteredBody = {};

  if (companyName) {
    filteredBody["companyName"] = companyName;
  }
  if (dateAdded) {
    filteredBody["dateAdded"] = dateAdded;
  }
  if (url) {
    filteredBody["url"] = url;
  }
  if (role) {
    filteredBody["role"] = role;
  }
  if (roleURL) {
    filteredBody["roleURL"] = roleURL;
  }
  if (position) {
    filteredBody["position"] = position;
  }
  if (source) {
    filteredBody["source"] = source;
  }
  if (JSON.stringify(pointOfContact) !== "{}") {
    filteredBody["pointOfContact"] = pointOfContact;
  }
  if (name) {
    filteredBody["pointOfContact.name"] = name;
  }
  if (position) {
    filteredBody["pointOfContact.position"] = position;
  }
  if (email) {
    filteredBody["pointOfContact.email"] = email;
  }
  if (JSON.stringify(application) !== "{}") {
    filteredBody["application"] = application;
  }

  // The above conditionals could be refactored similar to the below comments with a ternary operator
  // For MVP we will keep this for now
  comments ? (filteredBody["comments"] = comments) : null;

  console.log("Log of filtered body", filteredBody);

  try {
    let company = await Company.findById(req.body.companyId).lean();
    if (!company) {
      return res.render("error/404");
    }
    if (company.userId != req.user.id) {
      res.redirect("/companies");
    } else {
      company = await Company.findOneAndUpdate(
        { _id: req.params.id },
        // req.body,
        filteredBody,
        {
          new: true,
          runValidators: true,
        }
      );
      res.send(company);
    }
  } catch (err) {
    console.error(err);
    return res.render("error/500");
  }
};

// @desc    Delete company
// @route   DELETE /companies/delete
exports.deleteCompany = async (req, res) => {
  console.log(req.body);
  try {
    await Company.findOneAndDelete({ _id: req.body.id });

    res.json("Deleted It");
  } catch (err) {
    console.error(err);
    return res.render("error/500");
  }
};
