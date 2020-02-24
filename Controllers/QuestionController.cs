using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetangular.ViewModel;
using dotnetangular.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;



namespace dotnetangular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionController : ControllerBase
    {
    private ApplicationDbContext DbContext;
        public QuestionController(ApplicationDbContext context)
        {   
            DbContext=context;
        }

        [HttpGet]
        public IActionResult Get(){
        var question=DbContext.Questions.ToList();
            if(question!=null){
                return new JsonResult(question);
            }
                else
                {
                    return NotFound("Не знайдено");
                }
        
        }
    
    [HttpPost]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Post([FromBody] Question model) {
        if(model==null){
          return this.BadRequest(new ValidationProblemDetails(this.ModelState));
        }
            DbContext.Questions.Add(model);
            DbContext.SaveChanges();
            return Ok();
        
    }

[HttpGet("{id}")]
public IActionResult Get(int id){
    var questionId=DbContext.Questions.FirstOrDefault(i=>i.Id==id);
    if(questionId!=null){
        return Ok(questionId);
    }
    else{
        return NotFound("Не знайдено");
    }
}
    
    [HttpPut("{id}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Put(int id,[FromBody] Question model){
    if(id == model.Id){
    DbContext.Questions.Update(model);
        DbContext.SaveChanges();
        return Ok(model);
    }
    else{
        return NotFound("Не знайдено");
    }
    }
   
    [HttpDelete("{id}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Delete(int id){
        var deleteId=DbContext.Questions.FirstOrDefault(i=>i.Id==id);
        if(deleteId!=null){
            DbContext.Questions.Remove(deleteId);
            DbContext.SaveChanges();
            return Ok();
        }
        else{
            return NotFound();
        }
    }
    }  
}
