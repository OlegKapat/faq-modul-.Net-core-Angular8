using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetangular.Data.Models;
using dotnetangular.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics;


namespace dotnetangular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private ApplicationDbContext DbContext;
        public UserController(ApplicationDbContext context)
        {
            DbContext=context;
        }

        // GET api/user
        [HttpGet("")]
        public ActionResult<IEnumerable<string>> Getstrings()
        {
            return new List<string> { };
        }

        // GET api/user/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return null;
        }

        // POST api/user
        [HttpPost("")]
        public IActionResult Post([FromBody]User model)
        {
            if(model==null){
                return new StatusCodeResult(500);
            }
            else{
                User user=DbContext.Users.FirstOrDefault(i=>i.Name==model.Name);
                if(user!=null){
                    return BadRequest("Такий користувач вже створений");
                }
                user=DbContext.Users.FirstOrDefault(p=>p.Email==model.Email);
                if(user !=null){
                    return BadRequest("Такий email вже існує");
                }
                DbContext.Users.Add(model);
                DbContext.SaveChanges();
                return Ok();

            }
        }
         
        

        // PUT api/user/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, string value)
        {
             return null;
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
             return null;
        }
       
    }
}