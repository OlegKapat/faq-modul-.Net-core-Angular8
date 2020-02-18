using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetangular.ViewModel;
using dotnetangular.Data;
using Microsoft.AspNetCore.Authorization;
using dotnetangular.Data.Models;

namespace dotnetangular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnswerController:ControllerBase
    {
        private ApplicationDbContext DbContext;
        public AnswerController(ApplicationDbContext context){
           DbContext=context;
        }
        [HttpPost("")]
        public IActionResult Post([FromBody] Answer model) {
            if(model==null){
                return this.BadRequest(new ValidationProblemDetails(this.ModelState));
            }
            var answer=new Answer(){
                Text=model.Text,
                Author=model.Author,
                QuestionId=model.Id
            };
            DbContext.Answers.Add(answer);
            DbContext.SaveChanges();
            return Ok();
        }
        
        
    }
}