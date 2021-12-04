using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FilmeAPI.Data;
using FilmeAPI.Models;

namespace FilmeAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayersController : Controller
    {
        private readonly AdvinhefilmeContext _context;

        public PlayersController(AdvinhefilmeContext context)
        {
            _context = context;
        }
        [HttpGet(Name = "GetAll")]
        // GET: Players
        public  List<Aluno> Index()
        {
            return  _context.Aluno.ToList();
        }
        [HttpGet("{id}", Name = "GetDetails")]
        // GET: Players/Details/5
        public Object Details(int? id)
        {
            var player = _context.Aluno.Where(a => a.Id == id).FirstOrDefault();
            if (player == null) return new { message = "Jogador nao encontrado" };
            return player;
        }


        // POST: Players/Create
        [HttpPost, ActionName("Create")]
        public async Task<Object> Create([Bind("Nome,Email,Password,Score")] Aluno aluno)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Add(aluno);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                return new { message = "Jogador cadastrado com sucesso !" };
            }
            catch (Exception)
            {
                return new { message = "Erro ao cadastrar jogador tente novamente !" };
            }


        }



        //POST: Players/Edit/5
        [HttpPut]
        public async Task<Object> Edit([Bind("Id,Nome,Email,Password,Score")] Aluno aluno)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(aluno);
                    await _context.SaveChangesAsync();
                    return new { message = "Sucesso em atualizar jogador !" };
                }
                catch (Exception)
                {
                    return new { message = "Erro ao atualizar jogador tente novamente !" };
                }
            }
            return new { message = "Erro ao atualizar jogador tente novamente !" };
        }

        // POST: Players/Delete/5
        [HttpDelete]
        public async Task<Object> DeleteConfirmed(int id)
        {
            try
            {
                var aluno = await _context.Aluno.FindAsync(id);
                _context.Aluno.Remove(aluno);
                await _context.SaveChangesAsync();
                return new { messsage = "Jogador deletado com sucesso !" };
            }
            catch (Exception)
            {
                return new { messsage = "Erro ao deletar jogador tente novamente !" };
            }
        }

    }
}

