from django.shortcuts import render
from django.views import View

# Create your views here.
class CalcView(View):
    template_name = 'calculator/calc.html'
    def get(self, request, *args, **kwargs):
        args = {}
        return render(request, self.template_name, args)

    # def post(self, request, *args, **kwargs):
    #     return redirect('calc-home')

