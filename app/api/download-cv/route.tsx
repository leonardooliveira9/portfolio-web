import { NextResponse } from "next/server";

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Currículo - Leonardo Oliveira</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Arial', sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    
    .header {
      background: #f8f8f8;
      padding: 40px;
      border-bottom: 3px solid #333;
    }
    
    .header h1 {
      font-size: 48px;
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .header .subtitle {
      text-align: right;
      font-size: 14px;
      color: #666;
      margin-bottom: 20px;
    }
    
    .header ul {
      list-style: none;
    }
    
    .header ul li {
      margin: 8px 0;
      font-size: 14px;
      line-height: 1.6;
      padding-left: 15px;
      position: relative;
    }
    
    .header ul li:before {
      content: "■";
      position: absolute;
      left: 0;
      color: #333;
    }
    
    .content {
      display: flex;
      min-height: 600px;
    }
    
    .left-column {
      width: 45%;
      background: #2d2d2d;
      color: white;
      padding: 40px 30px;
    }
    
    .right-column {
      width: 55%;
      padding: 40px 30px;
      background: #f8f8f8;
    }
    
    .section-title {
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 3px;
      margin-bottom: 20px;
      text-transform: uppercase;
      padding-bottom: 10px;
      border-bottom: 2px solid currentColor;
    }
    
    .left-column .section-title {
      border-bottom-color: white;
    }
    
    .right-column .section-title {
      background: #999;
      color: white;
      padding: 8px 15px;
      border: none;
      margin-bottom: 15px;
      font-size: 14px;
      letter-spacing: 2px;
    }
    
    .education-item {
      margin-bottom: 25px;
    }
    
    .education-item h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .education-item p {
      font-size: 13px;
      line-height: 1.5;
      margin: 3px 0;
    }
    
    .courses-list {
      list-style: none;
    }
    
    .courses-list li {
      margin: 8px 0;
      font-size: 14px;
      padding-left: 15px;
      position: relative;
    }
    
    .courses-list li:before {
      content: "-";
      position: absolute;
      left: 0;
    }
    
    .contacts {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #555;
    }
    
    .contacts h3 {
      font-size: 16px;
      letter-spacing: 2px;
      margin-bottom: 15px;
      text-align: center;
    }
    
    .contacts p {
      font-size: 12px;
      margin: 8px 0;
      line-height: 1.6;
    }
    
    .contacts strong {
      display: block;
      margin-top: 10px;
      font-size: 11px;
    }
    
    .skill-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 12px 0;
      font-size: 14px;
    }
    
    .skill-dots {
      display: flex;
      gap: 4px;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #333;
    }
    
    .dot.empty {
      background: transparent;
      border: 1px solid #333;
    }
    
    .experience-item {
      margin-bottom: 25px;
      padding: 15px;
      background: white;
      border-left: 3px solid #666;
    }
    
    .experience-item h3 {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #333;
    }
    
    .experience-item .role {
      font-size: 13px;
      color: #666;
      margin-bottom: 8px;
    }
    
    .experience-item ul {
      list-style: none;
      font-size: 12px;
      line-height: 1.6;
    }
    
    .experience-item ul li {
      margin: 5px 0;
      padding-left: 15px;
      position: relative;
    }
    
    .experience-item ul li:before {
      content: "-";
      position: absolute;
      left: 0;
    }
    
    .experience-item .period {
      font-size: 12px;
      color: #666;
      margin-top: 8px;
    }
    
    @media print {
      body {
        padding: 0;
        background: white;
      }
      .container {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>LEONARDO OLIVEIRA</h1>
      <div class="subtitle">SOLTEIRO / 19 anos</div>
      <ul>
        <li>Sou um pouco reservado, mas aprendo rápido e bastante comunicativo.</li>
        <li>Pontual, trabalho bem em equipe e extremamente paciente.</li>
        <li>Gosto de adquirir conhecimentos e novas experiências.</li>
      </ul>
    </div>
    
    <div class="content">
      <div class="left-column">
        <div class="section">
          <h2 class="section-title">FORMAÇÃO</h2>
          
          <div class="education-item">
            <h3>- Ensino Superior</h3>
            <p>Instituição: FACULDADE SENAC</p>
            <p>Semestre: 1º</p>
            <p>Ano de Conclusão: 2026</p>
          </div>
          
          <div class="education-item">
            <h3>- Ensino Médio Completo</h3>
            <p>Instituição: Centro Educacional São Francisco</p>
            <p>Ano de Conclusão: 2023</p>
          </div>
        </div>
        
        <div class="section" style="margin-top: 30px;">
          <h2 class="section-title">CURSOS EXTRAS</h2>
          <ul class="courses-list">
            <li>Pacote Office</li>
            <li>Digitação</li>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>UX Produto</li>
            <li>Fotografia</li>
            <li>Excel Wordpress</li>
            <li>Python</li>
          </ul>
        </div>
        
        <div class="contacts">
          <h3>CONTATOS</h3>
          <p><strong>TELEFONE</strong></p>
          <p>(61) 9 9134-7331</p>
          <p><strong>E-MAIL</strong></p>
          <p>leonardooliveira2105@gmail.com</p>
          <p><strong>ENDEREÇO</strong></p>
          <p>Qr 115 lote 33, Bairro São José, São Sebastião/DF</p>
        </div>
      </div>
      
      <div class="right-column">
        <div class="section">
          <h2 class="section-title">HABILIDADES</h2>
          
          <div class="skill-item"><span>Pacote Office</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot empty"></span></div></div>
          <div class="skill-item"><span>Informática</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>
          <div class="skill-item"><span>Comunicação</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>
          <div class="skill-item"><span>Trabalho em equipe</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>
          <div class="skill-item"><span>Produtividade</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>
          <div class="skill-item"><span>Autonomia</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot empty"></span><span class="dot empty"></span></div></div>
          <div class="skill-item"><span>Foco em resultados</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot empty"></span></div></div>
          <div class="skill-item"><span>Comprometimento</span><div class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>
        </div>
        
        <div class="section" style="margin-top: 30px;">
          <h2 class="section-title">EXPERIÊNCIAS</h2>
          
          <div class="experience-item">
            <h3>BB TECNOLOGIA E SERVIÇOS</h3>
            <p class="role">Cargo: Estagiário ServiceNow</p>
            <ul>
              <li>Desenvolvimento em UI Builder</li>
              <li>Criação e manutenção de Workflows</li>
              <li>Customização de Service Portal</li>
              <li>Scripting e automações</li>
              <li>Criação de Dashboards e relatórios</li>
            </ul>
            <p class="period">Ano: Atual (1 ano de experiência)</p>
          </div>
          
          <div class="experience-item">
            <h3>JOVEM APRENDIZ DO BRASIL</h3>
            <p class="role">Cargo: Jovem Aprendiz</p>
            <ul>
              <li>Organização de documentos</li>
              <li>Confecção de crachás</li>
              <li>Treinamento em low code</li>
              <li>Criação de site e tarefas da área de TI</li>
            </ul>
            <p class="period">Ano: Junho 2021 a Junho 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Curriculo-Leonardo-Oliveira.html"',
      "Cache-Control": "no-store",
    },
  });
}
