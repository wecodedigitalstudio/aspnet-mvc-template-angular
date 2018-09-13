using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace aspnet_mvc_template_angular.Controllers
{
    public class DevsController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Devs";

            return View();
        }
    }
}
