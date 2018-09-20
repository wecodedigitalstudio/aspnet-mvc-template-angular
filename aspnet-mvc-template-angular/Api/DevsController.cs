using aspnet_mvc_template_angular.Models;
using FizzWare.NBuilder;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace aspnet_mvc_template_angular.Api
{
  public class DevsController : ApiController
  {

    private static IList<Developer> devs
    {
      get { return HttpContext.Current.Session["devs"] as IList<Developer>; }
      set { HttpContext.Current.Session["devs"] = value; }
    }

    public DevsController()
    {
      if (devs == null)
      {
        devs = Builder<Developer>
        .CreateListOfSize(100)
        .TheFirst(40)
            .With(c => c.Category = "FullStack")
        .TheNext(30)
            .With(c => c.Category = "BackEnd")
        .TheNext(30)
            .With(c => c.Category = "FrontEnd")
        .All()
            .With(c => c.FirstName = Faker.Name.First())
            .With(c => c.LastName = Faker.Name.Last())
            .With(c => c.Email = Faker.Internet.Email())
            .With(c => c.Phone = Faker.Phone.Number())
            .With(c => c.Birthday = new DateTime(Faker.RandomNumber.Next(1960, 2000), Faker.RandomNumber.Next(1, 12), Faker.RandomNumber.Next(1, 28)).ToString("dd/MM/yyyy"))
        .Build();
      }

    }


    [HttpGet]
    public IHttpActionResult Index()
    {
      return Ok(devs);
    }

    [HttpGet]
    public IHttpActionResult Details([FromUri] long id)
    {
      return Ok(devs.FirstOrDefault(d => d.Id == id));
    }

    [HttpPost]
    public IHttpActionResult Save([FromBody] Developer dev)
    {
      var selectedDev = devs.FirstOrDefault(d => d.Id == dev.Id);

      if (selectedDev != null)
      {
        selectedDev.FirstName = dev.FirstName;
        selectedDev.LastName = dev.LastName;
        selectedDev.Category = dev.Category;
        selectedDev.Birthday = dev.Birthday;
      }

      return Ok();
    }

    

  }
}
