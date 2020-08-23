module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },

  viewCategory: (req, res) => {
    res.render("admin/category/view_category");
  },

  viewBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },

  viewItem: (req, res) => {
    res.render("admin/item/view_item");
  },

  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
};
