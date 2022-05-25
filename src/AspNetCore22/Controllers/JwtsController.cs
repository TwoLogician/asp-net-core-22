using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace AspNetCore22.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class JwtsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> GetForJwt()
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var token = new JwtSecurityTokenHandler().ReadJwtToken(accessToken);
            return Ok(token.Id);
        }

        [AllowAnonymous]
        [HttpPost("Authentication")]
        public ActionResult PostForAuthentication()
        {
            var audience = "audience";
            var claims = new List<Claim>
            {
                new Claim("jti", "Two"),
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("b287209cb59f4f34ac182b873575be53"));
            var issuer = "issuer";
            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var token = new JwtSecurityToken(issuer, audience, claims, expires: DateTime.Now.AddDays(1), signingCredentials: signingCredentials);

            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}