package br.com.pecepoli.demo.controller;

import br.com.pecepoli.demo.domain.Pacote;
import br.com.pecepoli.demo.service.PacoteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PacoteController {

    private final PacoteService pacoteService;

    public PacoteController(PacoteService pacoteService) {
        this.pacoteService = pacoteService;
    }

    @GetMapping(path = "/pacotes")
    public List<Pacote> obterPacotes(){
        return pacoteService.obterTodosPacotes();
    }
}
