using aspnet_mvc_template_angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace aspnet_mvc_template_angular.Api
{
  public class CategoriesController : ApiController
  {

    [HttpGet]
    public IHttpActionResult Index()
    {
      var categories = new List<Category>();

      categories.Add(new Category()
      {
        Code = "FullStack",
        Description = "Full Stack"
      });

      categories.Add(new Category()
      {
        Code = "BackEnd",
        Description = "Back End"
      });

      categories.Add(new Category()
      {
        Code = "FrontEnd",
        Description = "Front End"
      });

      return Ok(categories);
    }

  }
}
