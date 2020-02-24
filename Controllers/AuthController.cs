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
using System.Text;

namespace dotnetangular.Controllers
{
    [ApiController]
    [Route("api/[controller]")] 
    public class AuthController:ControllerBase
    {
        private ApplicationDbContext DbContext;
        public AuthController( ApplicationDbContext context)
        {
        DbContext=context;
      }

    [HttpPost("token")]
    // [ProducesResponseType(StatusCodes.Status200OK)]
    // [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Token([FromBody] Auth auth)
        {
            
            var userId = DbContext.Users.Where(x => x.Name == auth.Name && x.Password == auth.Password).Select(s=>s.Id);
            var identity = GetIdentity(auth.Name, auth.Password);
            if (identity == null)
            {
                return BadRequest(new { errorText = "Не вірний логін чи пароль" });
            }
 
            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
 
                  return Ok(new { Token = encodedJwt,username = identity.Name, userId=userId});
        }
          private ClaimsIdentity GetIdentity(string name, string password)
        {
            var user = DbContext.Users.FirstOrDefault(x => x.Name == name && x.Password == password);
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Name),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }
 
            // если пользователя не найдено
            return null;
        }
    }
}