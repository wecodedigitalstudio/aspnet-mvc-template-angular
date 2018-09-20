using aspnet_mvc_template_angular.Models;
using FizzWare.NBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace aspnet_mvc_template_angular.Api
{
  public class CountriesController : ApiController
  {
    private static IList<Country> countries
    {
      get { return HttpContext.Current.Session["countries"] as IList<Country>; }
      set { HttpContext.Current.Session["countries"] = value; }
    }

    public CountriesController()
    {
      if (countries == null)
      {
        countries = Builder<Country>
        .CreateListOfSize(100)
        .All()
            .With(c => c.Description = Faker.Address.City())
        .Build();
      }
    }

    [HttpGet]
    public IHttpActionResult Index(string fulltext = "")
    {
      return Ok(countries.Where(c => c.Description.Contains(fulltext)));
    }
  }
}
