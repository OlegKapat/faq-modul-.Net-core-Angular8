using Microsoft.EntityFrameworkCore;
using dotnetangular.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace dotnetangular.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options){

        }
        public DbSet<Question> Questions {get;set;}
        public DbSet<User> Users {get;set;}
        public DbSet<Answer> Answers {get;set;}
    }
}
