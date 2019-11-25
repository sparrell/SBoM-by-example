#!/usr/bin/env escript

%% parse xml and extract the package names
main([Filename]) ->
  try
    {Scan, _} = xmerl_scan:file("elixir_bom.xml"),
    B1 = xmerl_lib:simplify_element(Scan),
    {_B11,_B12,B13} = B1,
    [B131 | _T131 ] = B13,
    {_B1311, _B1312, ListOfComponents} = B131,
    findcomponent(ListOfComponents)
  catch
    _:_ ->
      useage()
  end;

main(_) ->
  useage().

useage() ->
  io:format("usage: myxml xmlfilename\n"),
  halt(1).

findcomponent([]) -> ok;
findcomponent([H | T]) ->
  findattributes(H),
  findcomponent(T).

findattributes({_component, _type, AttributeList}) ->
  parse_attributes(AttributeList).

parse_attributes([]) -> ok;
parse_attributes([H | T]) ->
  find_purl(H),
  parse_attributes(T).

find_purl({purl, _L, Purl}) ->
   io:format("~p\n", Purl);
find_purl({_,_,_}) ->
  ok.
